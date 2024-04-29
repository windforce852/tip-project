import AuthCard from "../Components/AuthCard"

function CitizenLoginPage() {

    return (
      <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
      }}>
        <div style={{
          width: '340px',
          height: '400px',
          marginBlockEnd: '10vh',
        }}>
          <AuthCard/>
        </div>
      </div>
      </>
    )
  }
  
  export default CitizenLoginPage