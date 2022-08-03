import { render, screen, cleanup } from '@testing-library/react';
import Artist from '../Artist';
test('should render artists component', () => {
  const genres = ['Rock, ', 'Rap, ', 'Electronic, ', 'Alternative '];

  render(<Artist genres={genres} />);
  const artistElement = screen.getByTestId('article');
  expect(artistElement).toBeInTheDocument();
  expect(artistElement).toHaveTextContent('Linkin Park');
});
