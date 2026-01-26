import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Card variant="outline" data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toHaveClass('border-2');

    rerender(<Card variant="interactive" data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toHaveClass('cursor-pointer');
  });

  it('removes padding when noPadding is true', () => {
    const { rerender } = render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toHaveClass('p-6');

    rerender(<Card noPadding data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).not.toHaveClass('p-6');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class" data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toHaveClass('custom-class');
  });
});

describe('CardHeader', () => {
  it('renders children correctly', () => {
    render(<CardHeader>Header content</CardHeader>);
    expect(screen.getByText('Header content')).toBeInTheDocument();
  });
});

describe('CardTitle', () => {
  it('renders as h3 with correct classes', () => {
    render(<CardTitle>Title</CardTitle>);
    const title = screen.getByText('Title');
    expect(title.tagName).toBe('H3');
    expect(title).toHaveClass('font-serif');
  });
});

describe('CardDescription', () => {
  it('renders with correct classes', () => {
    render(<CardDescription>Description</CardDescription>);
    expect(screen.getByText('Description')).toHaveClass('font-mono');
  });
});

describe('CardContent', () => {
  it('renders children correctly', () => {
    render(<CardContent>Content here</CardContent>);
    expect(screen.getByText('Content here')).toBeInTheDocument();
  });
});

describe('CardFooter', () => {
  it('renders children correctly', () => {
    render(<CardFooter>Footer content</CardFooter>);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });
});
