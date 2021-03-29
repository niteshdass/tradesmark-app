import React from 'react'

const Home = () => {
      return (
            <>
                  <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                        <div class="container">
                              <a class="navbar-brand js-scroll-trigger" href="#page-top">Authority Panel</a>
                              <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

                                    <i class="fas fa-bars"></i>
                              </button>
                              <div class="collapse navbar-collapse" id="navbarResponsive">
                                    <ul class="navbar-nav ml-auto">
                                          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Add Event</a></li>
                                          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">Add Judge</a></li>
                                          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Student List</a></li>
                                    </ul>
                              </div>
                        </div>
                  </nav>



                  <section class="page-section portfolio" id="portfolio" style={{ marginTop: "50px" }}>
                        <div class="container">

                              <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Event List</h2>

                              <table class="table table-dark" style={{ marginTop: "50px" }}>
                                    <thead>
                                          <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Start Time</th>
                                                <th scope="col">EndTime</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          <tr>
                                                <th scope="row">1</th>
                                                <td>Marghgggggggggggggggggggggggggggggfffffffffffffff ggggggggggggggggggggg hhhhhhhhhhhhhk</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>@mdo</td>
                                                <td>
                                                      <button className="btn btn-primary">Edit</button>
                                                      <button className="btn btn-primary">Delete</button><br/>
                                                      <button className="btn btn-primary">Register Std List</button>
                                                      <button className="btn btn-primary">Answer</button><br />
                                                      <button className="btn btn-primary">Result</button><br/>
                                                
                                                </td>
                                          </tr>
                                          <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                          </tr>
                                          <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                          </tr>

                                    </tbody>
                              </table>
                        </div>
                  </section>



                  <section class="page-section" id="contact">
                        <div class="container">

                              <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Submit Answer</h2>

                              <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                              </div>

                               <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <form id="contactForm" name="sentMessage" novalidate="novalidate">
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input class="form-control" id="name" type="text" placeholder="Event Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                   <h5>Start Time</h5>
                                    <input class="form-control" id="phone" type="date" placeholder="Start Time" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p class="help-block text-danger"></p>
                                </div>
                                                </div>
                                                
                                                <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                     <h5>End Time</h5>
                                    <input class="form-control" id="phone" type="date" placeholder="End Time" required="required" data-validation-required-message="Please enter your phone number." />
                                   
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Guideline</label>
                                    <textarea class="form-control" id="message" rows="5" placeholder="Guideline" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                                </div>
                                                
                               <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Question?</label>
                                    <textarea class="form-control" id="message" rows="5" placeholder="Question?" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
                        </div>
                  </section>





                  <section class="page-section portfolio" id="portfolio">
                        <div class="container">

                              <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Event List</h2>

                              <div class="card" style={{ marginTop: "50px" }}>
                                    <div class="card-header" >
                                          Hello,Name
  </div>
                                    <div class="card-body">
                                          <h5 class="card-title">Event Name</h5>
                                          <p class="card-text">Feedback,judge name</p>
                                          <a href="#" class="btn btn-primary">Result</a>
                                    </div>
                              </div>
                        </div>
                  </section>





            </>
      )
}

export default Home
