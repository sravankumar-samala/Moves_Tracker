import Loader from 'react-loader-spinner'

export default function LoadingView() {
  return (
    <div data-testid="loader" className="loading-containe">
      <Loader
        type="ThreeDots"
        color="var(--clr-para-accent)"
        height="50"
        width="50"
      />
    </div>
  )
}
