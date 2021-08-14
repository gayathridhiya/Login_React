import React from 'react'




class LoginPage extends React.Component
{    

    //constructor()
    //{ 
    //super();
    //this.state = {
    //    email: ''
    //};
    //this.handleAdd = this.handleAdd.bind(this);
    //this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //}
    //handleAdd = async e=>
    //{   
        
    //    this.setState({ email: e.target.value });
    //    console.log(this.state.email);

    //}
    //handleFormSubmit = e => {

       
        
    //}

    render()
    {
        return(
        <div>
            <div id="page-wrapper">


                        <header id="header">
                            <h1 id="logo"><a href="index.html"></a></h1>
                            <nav id="nav">
                                <ul>
                                    
                                    <li><a href="#five" className="button primary">Login</a></li>
                                </ul>
                            </nav>
                        </header>


                        <section id="banner">
                            <div className="content">
                                <header>
                                    <h2>Book My Desk</h2>
                                    
                                </header>
                                
                            </div>
                            <a href="#five" className="goto-next scrolly">Next</a>
                        </section>



                        <section id="five" className="wrapper style2 special fade">
                            <div className="container">
                                <header>
                                    <h2>Login</h2>
                                    
                                </header>
                                <form className="cta">
                                    <div className="row gtr-uniform gtr-50">
                                        <div className="col-8 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Your Email Address"  required/></div>
                                        <div className="col-4 col-12-xsmall"><input type="submit" value="submit" className="fit primary" /></div>
                                    </div>
                                </form>
                            </div>
                        </section>


                        <footer id="footer">
                            
                            <ul className="copyright">
                                <li>&copy; Batch 16</li>
                            </ul>
                        </footer>

                    </div>

        </div>


        )
    }
}

export default LoginPage;