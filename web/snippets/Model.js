import { Generator } from '@abw/react-context'

const Greetings = ({ render }) => {
  return render({
    message: 'Hello World'
  })
}

export default Generator(Greetings)