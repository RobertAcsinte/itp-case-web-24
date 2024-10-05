import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest"; // Make sure to import expect from vitest
import BikeStationCard from "./BikeStationCard";

describe('BikeStationCard', () => {
  const station = {
    id: 1,
    name: 'Test Station',
    bikes_in_use: 3,
    bikes_available: 5,
  };

  beforeEach(() => {
    render(<BikeStationCard station={station} />);
  });

  
  it('Copies the station name to clipboard on button click', async () => {

    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValueOnce(undefined),
      },
    });

    const button = screen.getByText(/Copy to clipboard/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(station.name);
    
    await waitFor(() => expect(button).toHaveTextContent('Copied!'));
    
    await waitFor(() => expect(button).toHaveTextContent('Copy to clipboard'), { timeout: 2500 });
  });

});
