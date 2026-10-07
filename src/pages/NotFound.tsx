import Button from '@/components/common/Button'
import PageHeading from '@/components/common/PageHeading'
import PageContainer from '@/components/layout/PageContainer'
import { ROUTES } from '@/routes/paths'

// The design has no 404 page; this one is assembled from the standard page heading.
export default function NotFound() {
  return (
    <PageContainer title="Page not found">
      <PageHeading
        label="Error 404"
        title="Page not"
        highlight="found"
        description="The page you are looking for does not exist or has been moved."
      >
        <div className="pt-4">
          <Button to={ROUTES.home}>Back to home</Button>
        </div>
      </PageHeading>
    </PageContainer>
  )
}
