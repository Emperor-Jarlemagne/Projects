
const Notification = ({message}) => {
    if (message === null) {
    }
    return (
        <div className='error'>
            {message}
        </div>
    )
}
export default Notification