import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../../../src/components/common/Input/Input';

describe('Input Component', () => {
  it('should render input with correct props', () => {
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value="test value"
        onChange={() => {}}
        className="custom-class"
      />
    );

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveValue('test value');
    expect(input).toHaveClass('custom-class');
  });

  it('should call onChange when input value changes', () => {
    const handleChange = vi.fn();
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={handleChange}
      />
    );

    const input = screen.getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'new value' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should render label when provided', () => {
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
        label="Test Label"
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should show error message when provided', () => {
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
        error="This field is required"
      />
    );

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('should apply error styling when error is present', () => {
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
        error="Error message"
      />
    );

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toHaveClass('border-red-500');
  });

  it('should render different input types', () => {
    render(
      <Input
        type="email"
        placeholder="Enter email"
        value=""
        onChange={() => {}}
      />
    );

    const input = screen.getByPlaceholderText('Enter email');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('should be disabled when disabled prop is true', () => {
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value="test"
        onChange={() => {}}
        disabled={true}
      />
    );

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeDisabled();
  });

  it('should have correct accessibility attributes', () => {
    render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={() => {}}
        label="Accessible Label"
        error="Error"
      />
    );

    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toHaveAttribute('aria-label', 'Accessible Label');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});