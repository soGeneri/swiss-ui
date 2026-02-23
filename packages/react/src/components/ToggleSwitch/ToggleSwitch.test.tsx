import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ToggleSwitch } from './ToggleSwitch';

describe('ToggleSwitch', () => {
  it('renders label correctly', () => {
    render(
      <ToggleSwitch
        checked={false}
        onCheckedChange={() => {}}
        label="Test Label"
      />
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <ToggleSwitch
        checked={false}
        onCheckedChange={() => {}}
        label="Label"
        description="This is a description"
      />
    );
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('calls onCheckedChange when clicked', () => {
    const handleChange = vi.fn();
    render(
      <ToggleSwitch
        checked={false}
        onCheckedChange={handleChange}
        label="Toggle"
      />
    );
    fireEvent.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('toggles from checked to unchecked', () => {
    const handleChange = vi.fn();
    render(
      <ToggleSwitch
        checked={true}
        onCheckedChange={handleChange}
        label="Toggle"
      />
    );
    fireEvent.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it('does not call onCheckedChange when disabled', () => {
    const handleChange = vi.fn();
    render(
      <ToggleSwitch
        checked={false}
        onCheckedChange={handleChange}
        label="Toggle"
        disabled
      />
    );
    fireEvent.click(screen.getByRole('switch'));
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('has correct aria attributes', () => {
    render(
      <ToggleSwitch
        checked={true}
        onCheckedChange={() => {}}
        label="Toggle"
      />
    );
    const switchButton = screen.getByRole('switch');
    expect(switchButton).toHaveAttribute('aria-checked', 'true');
  });

  it('applies disabled styling', () => {
    render(
      <ToggleSwitch
        checked={false}
        onCheckedChange={() => {}}
        label="Toggle"
        disabled
      />
    );
    expect(screen.getByRole('switch')).toBeDisabled();
  });
});
