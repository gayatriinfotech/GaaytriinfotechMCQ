import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Slice/QuestionSlice';


function Index() {

  const {questions} = useSelector((state)=> state.questionOperation);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchData());
  },[]);

  const questionIdsLength = questions.length;


  return (
<React.Fragment>
<div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
  data-sidebar-position="fixed" data-header-position="fixed">
  <aside class="left-sidebar">
    <div>
      <div class="brand-logo d-flex align-items-center justify-content-between">
        <a href="/" class="text-nowrap logo-img">
          <img src="../backend/assets/images/gayatrilogo.png" width="180" alt="" />
        </a>
        <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i class="ti ti-x fs-8"></i>
        </div>
      </div>
      <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
        <ul id="sidebarnav">
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">Home</span>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="/" aria-expanded="false">
              <span>
                <i class="ti ti-layout-dashboard"></i>
              </span>
              <span class="hide-menu">Dashboard</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="/questions" aria-expanded="false">
              <span>
                <i class="ti ti-layout-dashboard"></i>
              </span>
              <span class="hide-menu">Questions</span>
            </a>
          </li>

          {/* <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">UI COMPONENTS</span>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="./ui-buttons.html" aria-expanded="false">
              <span>
                <i class="ti ti-article"></i>
              </span>
              <span class="hide-menu">Buttons</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="./ui-alerts.html" aria-expanded="false">
              <span>
                <i class="ti ti-alert-circle"></i>
              </span>
              <span class="hide-menu">Alerts</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="./ui-card.html" aria-expanded="false">
              <span>
                <i class="ti ti-cards"></i>
              </span>
              <span class="hide-menu">Card</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="./ui-forms.html" aria-expanded="false">
              <span>
                <i class="ti ti-file-description"></i>
              </span>
              <span class="hide-menu">Forms</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="./ui-typography.html" aria-expanded="false">
              <span>
                <i class="ti ti-typography"></i>
              </span>
              <span class="hide-menu">Typography</span>
            </a>
          </li>
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">AUTH</span>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="./authentication-login.html" aria-expanded="false">
              <span>
                <i class="ti ti-login"></i>
              </span>
              <span class="hide-menu">Login</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="./authentication-register.html" aria-expanded="false">
              <span>
                <i class="ti ti-user-plus"></i>
              </span>
              <span class="hide-menu">Register</span>
            </a>
          </li>
          <li class="nav-small-cap">
            <i class="ti ti-dots nav-small-cap-icon fs-4"></i>
            <span class="hide-menu">EXTRA</span>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="./icon-tabler.html" aria-expanded="false">
              <span>
                <i class="ti ti-mood-happy"></i>
              </span>
              <span class="hide-menu">Icons</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="./sample-page.html" aria-expanded="false">
              <span>
                <i class="ti ti-aperture"></i>
              </span>
              <span class="hide-menu">Sample Page</span>
            </a>
          </li> */}
        </ul>
 
      </nav>
    </div>
  </aside>
  <div class="body-wrapper">
 <Header/>
    <div class="container-fluid">
      <div class="row">

        <div class="col-lg-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <div class="row alig n-items-start">
                    <div class="col-8">
                      <h5 class="card-title mb-9 fw-semibold">Number Of Questions</h5>
                      <h4 class="fw-semibold mb-3">{questionIdsLength}</h4>
                      <div class="d-flex align-items-center pb-1">
                        <span
                          class="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                          <i class="ti ti-arrow-up-right text-success"></i>
                        </span>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="d-flex justify-content-end">
                        <div
                          class="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                          <i class="ti ti-currency-dollar fs-6"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="earning"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="row">
        <div class="col-lg-4 d-flex align-items-stretch">
          <div class="card w-100">
            <div class="card-body p-4">
              <div class="mb-4">
                <h5 class="card-title fw-semibold">Recent Transactions</h5>
              </div>
              <ul class="timeline-widget mb-0 position-relative mb-n5">
                <li class="timeline-item d-flex position-relative overflow-hidden">
                  <div class="timeline-time text-dark flex-shrink-0 text-end">09:30</div>
                  <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                    <span class="timeline-badge border-2 border border-primary flex-shrink-0 my-8"></span>
                    <span class="timeline-badge-border d-block flex-shrink-0"></span>
                  </div>
                  <div class="timeline-desc fs-3 text-dark mt-n1">Payment received from John Doe of $385.90</div>
                </li>
                <li class="timeline-item d-flex position-relative overflow-hidden">
                  <div class="timeline-time text-dark flex-shrink-0 text-end">10:00 am</div>
                  <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                    <span class="timeline-badge border-2 border border-info flex-shrink-0 my-8"></span>
                    <span class="timeline-badge-border d-block flex-shrink-0"></span>
                  </div>
                  <div class="timeline-desc fs-3 text-dark mt-n1 fw-semibold">New sale recorded <a
                      href="javascript:void(0)" class="text-primary d-block fw-normal">#ML-3467</a>
                  </div>
                </li>
                <li class="timeline-item d-flex position-relative overflow-hidden">
                  <div class="timeline-time text-dark flex-shrink-0 text-end">12:00 am</div>
                  <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                    <span class="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span>
                    <span class="timeline-badge-border d-block flex-shrink-0"></span>
                  </div>
                  <div class="timeline-desc fs-3 text-dark mt-n1">Payment was made of $64.95 to Michael</div>
                </li>
                <li class="timeline-item d-flex position-relative overflow-hidden">
                  <div class="timeline-time text-dark flex-shrink-0 text-end">09:30 am</div>
                  <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                    <span class="timeline-badge border-2 border border-warning flex-shrink-0 my-8"></span>
                    <span class="timeline-badge-border d-block flex-shrink-0"></span>
                  </div>
                  <div class="timeline-desc fs-3 text-dark mt-n1 fw-semibold">New sale recorded <a
                      href="javascript:void(0)" class="text-primary d-block fw-normal">#ML-3467</a>
                  </div>
                </li>
                <li class="timeline-item d-flex position-relative overflow-hidden">
                  <div class="timeline-time text-dark flex-shrink-0 text-end">09:30 am</div>
                  <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                    <span class="timeline-badge border-2 border border-danger flex-shrink-0 my-8"></span>
                    <span class="timeline-badge-border d-block flex-shrink-0"></span>
                  </div>
                  <div class="timeline-desc fs-3 text-dark mt-n1 fw-semibold">New arrival recorded 
                  </div>
                </li>
                <li class="timeline-item d-flex position-relative overflow-hidden">
                  <div class="timeline-time text-dark flex-shrink-0 text-end">12:00 am</div>
                  <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                    <span class="timeline-badge border-2 border border-success flex-shrink-0 my-8"></span>
                  </div>
                  <div class="timeline-desc fs-3 text-dark mt-n1">Payment Done</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-8 d-flex align-items-stretch">
          <div class="card w-100">
            <div class="card-body p-4">
              <h5 class="card-title fw-semibold mb-4">Recent Transactions</h5>
              <div class="table-responsive">
                <table class="table text-nowrap mb-0 align-middle">
                  <thead class="text-dark fs-4">
                    <tr>
                      <th class="border-bottom-0">
                        <h6 class="fw-semibold mb-0">Id</h6>
                      </th>
                      <th class="border-bottom-0">
                        <h6 class="fw-semibold mb-0">Assigned</h6>
                      </th>
                      <th class="border-bottom-0">
                        <h6 class="fw-semibold mb-0">Name</h6>
                      </th>
                      <th class="border-bottom-0">
                        <h6 class="fw-semibold mb-0">Priority</h6>
                      </th>
                      <th class="border-bottom-0">
                        <h6 class="fw-semibold mb-0">Budget</h6>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-bottom-0"><h6 class="fw-semibold mb-0">1</h6></td>
                      <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-1">Sunil Joshi</h6>
                          <span class="fw-normal">Web Designer</span>                          
                      </td>
                      <td class="border-bottom-0">
                        <p class="mb-0 fw-normal">Elite Admin</p>
                      </td>
                      <td class="border-bottom-0">
                        <div class="d-flex align-items-center gap-2">
                          <span class="badge bg-primary rounded-3 fw-semibold">Low</span>
                        </div>
                      </td>
                      <td class="border-bottom-0">
                        <h6 class="fw-semibold mb-0 fs-4">$3.9</h6>
                      </td>
                    </tr> 
                    <tr>
                      <td class="border-bottom-0"><h6 class="fw-semibold mb-0">2</h6></td>
                      <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-1">Andrew McDownland</h6>
                          <span class="fw-normal">Project Manager</span>                          
                      </td>
                      <td class="border-bottom-0">
                        <p class="mb-0 fw-normal">Real Homes WP Theme</p>
                      </td>
                      <td class="border-bottom-0">
                        <div class="d-flex align-items-center gap-2">
                          <span class="badge bg-secondary rounded-3 fw-semibold">Medium</span>
                        </div>
                      </td>
                      <td class="border-bottom-0">
                        <h6 class="fw-semibold mb-0 fs-4">$24.5k</h6>
                      </td>
                    </tr> 
                    <tr>
                      <td class="border-bottom-0"><h6 class="fw-semibold mb-0">3</h6></td>
                      <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-1">Christopher Jamil</h6>
                          <span class="fw-normal">Project Manager</span>                          
                      </td>
                      <td class="border-bottom-0">
                        <p class="mb-0 fw-normal">MedicalPro WP Theme</p>
                      </td>
                      <td class="border-bottom-0">
                        <div class="d-flex align-items-center gap-2">
                          <span class="badge bg-danger rounded-3 fw-semibold">High</span>
                        </div>
                      </td>
                      <td class="border-bottom-0">
                        <h6 class="fw-semibold mb-0 fs-4">$12.8k</h6>
                      </td>
                    </tr>      
                    <tr>
                      <td class="border-bottom-0"><h6 class="fw-semibold mb-0">4</h6></td>
                      <td class="border-bottom-0">
                          <h6 class="fw-semibold mb-1">Nirav Joshi</h6>
                          <span class="fw-normal">Frontend Engineer</span>                          
                      </td>
                      <td class="border-bottom-0">
                        <p class="mb-0 fw-normal">Hosting Press HTML</p>
                      </td>
                      <td class="border-bottom-0">
                        <div class="d-flex align-items-center gap-2">
                          <span class="badge bg-success rounded-3 fw-semibold">Critical</span>
                        </div>
                      </td>
                      <td class="border-bottom-0">
                        <h6 class="fw-semibold mb-0 fs-4">$2.4k</h6>
                      </td>
                    </tr>                       
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div class="py-6 px-6 text-center">
        <p class="mb-0 fs-4">Design and Developed by <a href="/" target="_blank" class="pe-1 text-primary text-decoration-underline">Bramha </a> Distributed by <a href="/">Modernize</a></p>
      </div>
    </div>
  </div>
</div>

<Footer/>

</React.Fragment>
  )
}

export default Index

