// import '/Users/amirhali/repos/react-expenses/src/css-folder/CreateAccount.css'

export default function CreateAccount() {
    return (
        <div class="container-md inputs">
            <form>
                <h1>Welcome! Create An Account.</h1>
                <br/>
                <div class='names'>
                    <input class="form-control me-2" type="text" placeholder="First Name"/>
                    <input class="form-control me-2" type="text" placeholder="Last Name"/>
                </div>
                <br/>
                <input class="form-control me-2" type="text" placeholder="Create Username" aria-label="Search"/>
                <br/>
                <input class="form-control me-2" type="password" placeholder="Create Password" aria-label="Search"/>
                <br/>
                <input class="form-control me-2" type="password" placeholder="Verify Password" aria-label="Search"/>
                <br/>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-success create-button">Create Account</button>
                </div>
            </form>
            <br/>
            <div><p>Have An Account Already? <a class='anchor'>Log In.</a></p></div>
        </div>
    )
}