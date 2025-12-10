const { NewsSection, NewsItem } = require('../../../src/models');
const newsSectionService = require('../../../src/services/newsSectionService');

jest.mock('../../../src/models');

describe('NewsSectionService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllSections', () => {
    it('should return all sections with news items count', async () => {
      const mockSections = [
        {
          id: 1,
          title: 'Test Section',
          start_date: '2025-01-01',
          end_date: '2025-01-31',
          newsItems: [{ id: 1 }, { id: 2 }],
          toJSON: jest.fn().mockReturnValue({
            id: 1,
            title: 'Test Section',
            start_date: '2025-01-01',
            end_date: '2025-01-31'
          })
        }
      ];

      NewsSection.findAll.mockResolvedValue(mockSections);

      const result = await newsSectionService.getAllSections();

      expect(NewsSection.findAll).toHaveBeenCalledWith({
        include: [{
          model: NewsItem,
          as: 'newsItems',
          attributes: ['id']
        }]
      });
      expect(result[0].newsItemsCount).toBe(2);
    });

    it('should handle empty results', async () => {
      NewsSection.findAll.mockResolvedValue([]);

      const result = await newsSectionService.getAllSections();

      expect(result).toEqual([]);
    });
  });

  describe('getSectionById', () => {
    it('should return section by id with news items', async () => {
      const mockSection = {
        id: 1,
        title: 'Test Section',
        newsItems: []
      };

      NewsSection.findByPk.mockResolvedValue(mockSection);

      const result = await newsSectionService.getSectionById(1);

      expect(NewsSection.findByPk).toHaveBeenCalledWith(1, {
        include: [{
          model: NewsItem,
          as: 'newsItems'
        }]
      });
      expect(result).toBe(mockSection);
    });

    it('should return null for non-existent section', async () => {
      NewsSection.findByPk.mockResolvedValue(null);

      const result = await newsSectionService.getSectionById(999);

      expect(result).toBeNull();
    });
  });

  describe('createSection', () => {
    it('should create a new section', async () => {
      const sectionData = {
        title: 'New Section',
        start_date: '2025-01-01',
        end_date: '2025-01-31'
      };
      const mockCreatedSection = { id: 1, ...sectionData };

      NewsSection.create.mockResolvedValue(mockCreatedSection);

      const result = await newsSectionService.createSection(sectionData);

      expect(NewsSection.create).toHaveBeenCalledWith(sectionData);
      expect(result).toBe(mockCreatedSection);
    });
  });

  describe('updateSection', () => {
    it('should update existing section', async () => {
      const updateData = { title: 'Updated Title' };
      const mockSection = {
        id: 1,
        title: 'Old Title',
        update: jest.fn().mockResolvedValue({ id: 1, title: 'Updated Title' })
      };

      NewsSection.findByPk.mockResolvedValue(mockSection);

      const result = await newsSectionService.updateSection(1, updateData);

      expect(NewsSection.findByPk).toHaveBeenCalledWith(1);
      expect(mockSection.update).toHaveBeenCalledWith(updateData);
      expect(result.title).toBe('Updated Title');
    });

    it('should throw error for non-existent section', async () => {
      NewsSection.findByPk.mockResolvedValue(null);

      await expect(newsSectionService.updateSection(999, {}))
        .rejects
        .toThrow('Section not found');
    });
  });

  describe('deleteSection', () => {
    it('should delete existing section', async () => {
      const mockSection = {
        id: 1,
        destroy: jest.fn().mockResolvedValue(true)
      };

      NewsSection.findByPk.mockResolvedValue(mockSection);

      const result = await newsSectionService.deleteSection(1);

      expect(NewsSection.findByPk).toHaveBeenCalledWith(1);
      expect(mockSection.destroy).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('should throw error for non-existent section', async () => {
      NewsSection.findByPk.mockResolvedValue(null);

      await expect(newsSectionService.deleteSection(999))
        .rejects
        .toThrow('Section not found');
    });
  });
});