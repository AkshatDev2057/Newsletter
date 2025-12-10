const { NewsItem, NewsSection } = require('../../../src/models');
const newsItemService = require('../../../src/services/newsItemService');

jest.mock('../../../src/models');

describe('NewsItemService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllItems', () => {
    it('should return all items without section filter', async () => {
      const mockItems = [
        { id: 1, headline: 'Test News', newsSection: { id: 1, title: 'Section 1' } }
      ];

      NewsItem.findAll.mockResolvedValue(mockItems);

      const result = await newsItemService.getAllItems();

      expect(NewsItem.findAll).toHaveBeenCalledWith({
        where: {},
        include: [{
          model: NewsSection,
          as: 'newsSection',
          attributes: ['id', 'title']
        }]
      });
      expect(result).toBe(mockItems);
    });

    it('should return items filtered by section', async () => {
      const mockItems = [
        { id: 1, headline: 'Test News', section_id: 1 }
      ];

      NewsItem.findAll.mockResolvedValue(mockItems);

      const result = await newsItemService.getAllItems(1);

      expect(NewsItem.findAll).toHaveBeenCalledWith({
        where: { section_id: 1 },
        include: [{
          model: NewsSection,
          as: 'newsSection',
          attributes: ['id', 'title']
        }]
      });
      expect(result).toBe(mockItems);
    });
  });

  describe('getItemById', () => {
    it('should return item by id with section', async () => {
      const mockItem = {
        id: 1,
        headline: 'Test News',
        newsSection: { id: 1, title: 'Section 1' }
      };

      NewsItem.findByPk.mockResolvedValue(mockItem);

      const result = await newsItemService.getItemById(1);

      expect(NewsItem.findByPk).toHaveBeenCalledWith(1, {
        include: [{
          model: NewsSection,
          as: 'newsSection'
        }]
      });
      expect(result).toBe(mockItem);
    });

    it('should return null for non-existent item', async () => {
      NewsItem.findByPk.mockResolvedValue(null);

      const result = await newsItemService.getItemById(999);

      expect(result).toBeNull();
    });
  });

  describe('createItem', () => {
    it('should create a new news item', async () => {
      const itemData = {
        section_id: 1,
        headline: 'New News',
        news_date: '2025-01-01',
        content: 'News content'
      };
      const mockCreatedItem = { id: 1, ...itemData };

      NewsItem.create.mockResolvedValue(mockCreatedItem);

      const result = await newsItemService.createItem(itemData);

      expect(NewsItem.create).toHaveBeenCalledWith(itemData);
      expect(result).toBe(mockCreatedItem);
    });
  });

  describe('updateItem', () => {
    it('should update existing item', async () => {
      const updateData = { headline: 'Updated Headline' };
      const mockItem = {
        id: 1,
        headline: 'Old Headline',
        update: jest.fn().mockResolvedValue({ id: 1, headline: 'Updated Headline' })
      };

      NewsItem.findByPk.mockResolvedValue(mockItem);

      const result = await newsItemService.updateItem(1, updateData);

      expect(NewsItem.findByPk).toHaveBeenCalledWith(1);
      expect(mockItem.update).toHaveBeenCalledWith(updateData);
      expect(result.headline).toBe('Updated Headline');
    });

    it('should throw error for non-existent item', async () => {
      NewsItem.findByPk.mockResolvedValue(null);

      await expect(newsItemService.updateItem(999, {}))
        .rejects
        .toThrow('News item not found');
    });
  });

  describe('deleteItem', () => {
    it('should delete existing item', async () => {
      const mockItem = {
        id: 1,
        destroy: jest.fn().mockResolvedValue(true)
      };

      NewsItem.findByPk.mockResolvedValue(mockItem);

      const result = await newsItemService.deleteItem(1);

      expect(NewsItem.findByPk).toHaveBeenCalledWith(1);
      expect(mockItem.destroy).toHaveBeenCalled();
      expect(result).toBe(true);
    });

    it('should throw error for non-existent item', async () => {
      NewsItem.findByPk.mockResolvedValue(null);

      await expect(newsItemService.deleteItem(999))
        .rejects
        .toThrow('News item not found');
    });
  });
});