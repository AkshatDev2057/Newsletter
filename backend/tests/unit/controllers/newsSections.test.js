const newsSectionService = require('../../../src/services/newsSectionService');
const newsSectionController = require('../../../src/controllers/newsSections');

jest.mock('../../../src/services/newsSectionService');

describe('NewsSectionController', () => {
  let mockReq, mockRes, mockNext;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    mockNext = jest.fn();
    jest.clearAllMocks();
  });

  describe('getAll', () => {
    it('should return all sections', async () => {
      const mockSections = [
        { id: 1, title: 'Test Section', newsItemsCount: 2 }
      ];

      newsSectionService.getAllSections.mockResolvedValue(mockSections);

      await newsSectionController.getAll(mockReq, mockRes);

      expect(newsSectionService.getAllSections).toHaveBeenCalled();
      expect(mockRes.json).toHaveBeenCalledWith(mockSections);
    });

    it('should handle service errors', async () => {
      const error = new Error('Database error');
      newsSectionService.getAllSections.mockRejectedValue(error);

      await expect(newsSectionController.getAll(mockReq, mockRes))
        .rejects
        .toThrow('Database error');
    });
  });

  describe('getById', () => {
    it('should return section by id', async () => {
      const mockSection = { id: 1, title: 'Test Section' };
      mockReq.params = { id: '1' };

      newsSectionService.getSectionById.mockResolvedValue(mockSection);

      await newsSectionController.getById(mockReq, mockRes);

      expect(newsSectionService.getSectionById).toHaveBeenCalledWith('1');
      expect(mockRes.json).toHaveBeenCalledWith(mockSection);
    });

    it('should return 404 for non-existent section', async () => {
      mockReq.params = { id: '999' };

      newsSectionService.getSectionById.mockResolvedValue(null);

      await newsSectionController.getById(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Section not found' });
    });
  });

  describe('create', () => {
    it('should create a new section', async () => {
      const sectionData = {
        start_date: '2025-01-01',
        end_date: '2025-01-31',
        title: 'New Section'
      };
      const mockCreatedSection = { id: 1, ...sectionData };

      mockReq.body = sectionData;
      newsSectionService.createSection.mockResolvedValue(mockCreatedSection);

      await newsSectionController.create(mockReq, mockRes);

      expect(newsSectionService.createSection).toHaveBeenCalledWith(sectionData);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith(mockCreatedSection);
    });
  });

  describe('update', () => {
    it('should update existing section', async () => {
      const updateData = { title: 'Updated Title' };
      const mockUpdatedSection = { id: 1, title: 'Updated Title' };

      mockReq.params = { id: '1' };
      mockReq.body = updateData;
      newsSectionService.updateSection.mockResolvedValue(mockUpdatedSection);

      await newsSectionController.update(mockReq, mockRes);

      expect(newsSectionService.updateSection).toHaveBeenCalledWith('1', updateData);
      expect(mockRes.json).toHaveBeenCalledWith(mockUpdatedSection);
    });

    it('should return 404 for update of non-existent section', async () => {
      const error = new Error('Section not found');
      mockReq.params = { id: '999' };
      mockReq.body = { title: 'Updated' };

      newsSectionService.updateSection.mockRejectedValue(error);

      await newsSectionController.update(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Section not found' });
    });
  });

  describe('delete', () => {
    it('should delete existing section', async () => {
      mockReq.params = { id: '1' };
      newsSectionService.deleteSection.mockResolvedValue();

      await newsSectionController.delete(mockReq, mockRes);

      expect(newsSectionService.deleteSection).toHaveBeenCalledWith('1');
      expect(mockRes.status).toHaveBeenCalledWith(204);
      expect(mockRes.send).toHaveBeenCalled();
    });

    it('should return 404 for delete of non-existent section', async () => {
      const error = new Error('Section not found');
      mockReq.params = { id: '999' };

      newsSectionService.deleteSection.mockRejectedValue(error);

      await newsSectionController.delete(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith({ error: 'Section not found' });
    });
  });
});