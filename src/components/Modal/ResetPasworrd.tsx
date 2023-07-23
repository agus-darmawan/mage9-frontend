const ResetPassword = () => {
  return (
    <form className='space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8'>
      <h3 className='text-xl font-medium  text-white'>Reset Password</h3>
      <p className='text-sm text-white '>
        Forgotten your password? Enter your e-mail address below, and we&apos;ll
        send you an e-mail allowing you to reset it.
      </p>
      <div>
        <label
          htmlFor='email'
          className='mb-2 block text-sm font-medium text-gray-300'
        >
          Your email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          className='block w-full rounded-lg border-2 border-gray-500 bg-gray-600 p-2.5 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
          placeholder='name@company.com'
        />
      </div>

      <button
        type='submit'
        className={`w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-400  
                focus:ring-4 focus:ring-blue-300 `}
      >
        Reset Password
      </button>
    </form>
  )
}
export default ResetPassword
