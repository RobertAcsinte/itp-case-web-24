import { expect, it } from 'vitest'
import { render } from "@testing-library/react";
import Home from './page';

it('Snapshot Landing Page', () => {
  const result = render(<Home />)
  expect(result).toMatchSnapshot()
})
