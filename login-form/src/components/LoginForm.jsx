

function LoginForm({isShowingPass, setIsShowingPass}){
  function handleOnClickShow(){
    setIsShowingPass(!isShowingPass)
  }

  return (
    <>
      <div>
        <h1>Hello, welcome to my website</h1>
      </div>
      <div className="inputs-container">
        <div>
          <input type="text" placeholder="Email" className="form-input" />
        </div>

        <div>
          <input 
            type={isShowingPass ? "text" : "password"} 
            placeholder="Password" 
            className="form-input" 
          />
          <button onClick={handleOnClickShow}>{isShowingPass ? 'Hide' : 'Show'}</button>
        </div>
      </div>
      <div className="button-container">
        <button> Login </button>
        <button> Sing up </button>
      </div>
    </>
    )
}

export default LoginForm