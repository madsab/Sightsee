import HeroCarousel from '@/components/molecules/HeroCarousel'
import { carouselData } from '@/lib/data/heroCarouselData'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/components/ui/carousel', () => ({
  Carousel: ({ children }: { children: React.ReactNode }) => <div data-testid="carousel">{children}</div>,
  CarouselContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="carousel-content">{children}</div>
  ),
  CarouselItem: ({ children }: { children: React.ReactNode }) => <div data-testid="carousel-item">{children}</div>,
}))

vi.mock('react-router-dom', () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to} data-testid="link">
      {children}
    </a>
  ),
}))

describe('HeroCarousel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all carousel items', () => {
    render(<HeroCarousel />)

    const images = screen.getAllByAltText('Image of a destination')
    expect(images.length).toBe(carouselData.length)

    carouselData.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    })
  })

  it('renders links correctly for each carousel item', () => {
    render(<HeroCarousel />)

    const links = screen.getAllByTestId('link')
    expect(links.length).toBe(carouselData.length)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '/browse')
    })
  })
})
