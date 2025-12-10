const validationMiddleware = require('../../../src/middlewares/validation');

describe('Validation Middleware', () => {
  let mockSchema, mockReq, mockRes, mockNext;

  beforeEach(() => {
    mockSchema = {
      validate: jest.fn()
    };
    mockReq = {
      body: {}
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    mockNext = jest.fn();
  });

  it('should call next when validation passes', () => {
    mockSchema.validate.mockReturnValue({ error: undefined });

    const middleware = validationMiddleware(mockSchema);
    middleware(mockReq, mockRes, mockNext);

    expect(mockSchema.validate).toHaveBeenCalledWith(mockReq.body);
    expect(mockNext).toHaveBeenCalled();
    expect(mockRes.status).not.toHaveBeenCalled();
  });

  it('should return 400 when validation fails', () => {
    const validationError = {
      details: [{ message: 'Validation failed' }]
    };
    mockSchema.validate.mockReturnValue({ error: validationError });

    const middleware = validationMiddleware(mockSchema);
    middleware(mockReq, mockRes, mockNext);

    expect(mockSchema.validate).toHaveBeenCalledWith(mockReq.body);
    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Validation failed' });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should return the first validation error message', () => {
    const validationError = {
      details: [
        { message: 'First error' },
        { message: 'Second error' }
      ]
    };
    mockSchema.validate.mockReturnValue({ error: validationError });

    const middleware = validationMiddleware(mockSchema);
    middleware(mockReq, mockRes, mockNext);

    expect(mockRes.json).toHaveBeenCalledWith({ error: 'First error' });
  });

  it('should handle empty error details', () => {
    const validationError = {
      details: []
    };
    mockSchema.validate.mockReturnValue({ error: validationError });

    const middleware = validationMiddleware(mockSchema);
    middleware(mockReq, mockRes, mockNext);

    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Validation failed' });
  });

  it('should handle validation error without details', () => {
    const validationError = {};
    mockSchema.validate.mockReturnValue({ error: validationError });

    const middleware = validationMiddleware(mockSchema);
    middleware(mockReq, mockRes, mockNext);

    expect(mockRes.json).toHaveBeenCalledWith({ error: 'Validation failed' });
  });
});