import StarReview from '@/components/StarReview'
import { Card } from '@/components/ui/card'
import { GET_DESTINATION_BY_ID } from '@/graphql/queries'
import { useQuery } from '@apollo/client'
import { Destination } from '@types'
import { useParams } from 'react-router-dom'

const ReviewPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading, error } = useQuery<{ getDestination: Destination }>(GET_DESTINATION_BY_ID, {
    variables: { id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading destination details.</p>

  const destination = data?.getDestination ?? null

  if (!destination) return <p>No destination found for the provided ID.</p>

  return (
    <main>
      <div className="text-center mb-10">
        <h1 className="font-extrabold mb-6 max-sm:text-4xl max-md:text-6xl md:text-7xl">{destination.title}</h1>
        <h2 className="font-bold mb-2 max-sm:text-lg max-md:text-xl md:text-2xl">
          {destination.region}, {destination.country}
        </h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch p-2">
        {/* Left Column: Image and Rating */}
        <Card className="flex flex-col items-center justify-center w-full h-full p-4">
          <img src={destination.image} alt={destination.title} className="w-full h-auto max-w-md mb-4 rounded-md" />
          <div className="text-center">
            <p className="font-semibold mt-2">Rating:</p>
            <StarReview
              userRating={destination.rating}
              handleStarClick={(rating: number) => console.log(`User clicked on rating ${rating}`)}
            />
          </div>
        </Card>

        {/* Right Column: Description */}
        <Card className="w-full h-full p-4 flex flex-col">
          <h3 className="font-bold text-xl mb-4 text-center">Description</h3>
          {destination.longdescription && <p className="flex-grow">{destination.longdescription}</p>}
        </Card>
      </section>
    </main>
  )
}

export default ReviewPage
