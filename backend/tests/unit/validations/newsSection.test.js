const { createSchema, updateSchema } = require('../../../src/validations/newsSection');

describe('NewsSection Validation', () => {
  describe('createSchema', () => {
    it('should validate valid create data', () => {
      const validData = {
        start_date: '2025-01-01',
        end_date: '2025-01-31',
        title: 'Test Section'
      };

      const { error } = createSchema.validate(validData);

      expect(error).toBeUndefined();
    });

    it('should require start_date', () => {
      const invalidData = {
        end_date: '2025-01-31',
        title: 'Test Section'
      };

      const { error } = createSchema.validate(invalidData);

      expect(error).toBeDefined();
      expect(error.details[0].message).toContain('start_date');
    });

    it('should require end_date', () => {
      const invalidData = {
        start_date: '2025-01-01',
        title: 'Test Section'
      };

      const { error } = createSchema.validate(invalidData);

      expect(error).toBeDefined();
      expect(error.details[0].message).toContain('end_date');
    });

    it('should allow optional title', () => {
      const validData = {
        start_date: '2025-01-01',
        end_date: '2025-01-31'
      };

      const { error } = createSchema.validate(validData);

      expect(error).toBeUndefined();
    });

    it('should validate title length', () => {
      const invalidData = {
        start_date: '2025-01-01',
        end_date: '2025-01-31',
        title: 'a'.repeat(256) // Exceeds 255 limit
      };

      const { error } = createSchema.validate(invalidData);

      expect(error).toBeDefined();
    });

    it('should validate date format', () => {
      const invalidData = {
        start_date: 'invalid-date',
        end_date: '2025-01-31',
        title: 'Test Section'
      };

      const { error } = createSchema.validate(invalidData);

      expect(error).toBeDefined();
    });
  });

  describe('updateSchema', () => {
    it('should validate valid update data', () => {
      const validData = {
        title: 'Updated Section'
      };

      const { error } = updateSchema.validate(validData);

      expect(error).toBeUndefined();
    });

    it('should allow all fields to be optional', () => {
      const validData = {};

      const { error } = updateSchema.validate(validData);

      expect(error).toBeUndefined();
    });

    it('should validate title length on update', () => {
      const invalidData = {
        title: 'a'.repeat(256)
      };

      const { error } = updateSchema.validate(invalidData);

      expect(error).toBeDefined();
    });

    it('should validate date format on update', () => {
      const invalidData = {
        start_date: 'invalid-date'
      };

      const { error } = updateSchema.validate(invalidData);

      expect(error).toBeDefined();
    });
  });
});