import './app.css'

function App() {
    return (
        <>
      <div>
              <center> <h1> Student Login Form </h1> </center>   
    <form>  
        <div class="container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required/>
            <label>First Name : </label>   
            <input type="text" placeholder="Enter FirstName" name="Firtname" required/>   
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
            <button type="submit">Login</button>   
            <input type="checkbox" checked="checked"/> Remember me   
            <button type="button" class="cancelbtn"> Cancel</button>   
            Forgot <a href=" "> password? </a>   
        </div>   
    </form>   
      </div>
      </>
    );
  }
  
  export default App;