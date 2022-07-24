import React from 'react';
import { Calendar } from 'react-feather';

function Main() {
  return (
<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="dropdown">
            <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="align-text-bottom"><Calendar color='white' size="20"/> </span>
              Time Frame
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">Weekly</a></li>
              <li><a class="dropdown-item" href="#">Monthly</a></li>
              <li><a class="dropdown-item" href="#">Yearly</a></li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Weekly</h2>
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Amount</th>
              <th scope="col">Income/Expense</th>
              <th scope="col">Date/Time</th>
              <th scope="col">Description</th>
              <th scope="col">Division</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1000</td>
              <td>Income</td>
              <td>04-JUL-2022</td>
              <td>Income</td>
              <td>Office</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>2</td>
              <td>40</td>
              <td>Expense</td>
              <td>05-JUL-2022</td>
              <td>Parking</td>
              <td>Office</td>
              <td>Parking</td>
            </tr>
            <tr>
              <td>3</td>
              <td>30</td>
              <td>Expense</td>
              <td>06-JUL-2022</td>
              <td>Pen</td>
              <td>Personal</td>
              <td>Stationary</td>
            </tr>
            <tr>
              <td>4</td>
              <td>100</td>
              <td>Expense</td>
              <td>06-JUL-2022</td>
              <td>Petrol</td>
              <td>Personal</td>
              <td>Fuel</td>
            </tr>
            <tr>
              <td>5</td>
              <td>30</td>
              <td>Expense</td>
              <td>07-JUL-2022</td>
              <td>Client Meeting</td>
              <td>Office</td>
              <td>Travel</td>
            </tr>
            <tr>
              <td>6</td>
              <td>3000</td>
              <td>Income</td>
              <td>07-JUL-2022</td>
              <td>Income</td>
              <td>Personal</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>7</td>
              <td>300</td>
              <td>Expense</td>
              <td>08-JUL-2022</td>
              <td>Grocery</td>
              <td>Personal</td>
              <td>Supplies</td>
            </tr>
            <tr>
              <td>8</td>
              <td>30000</td>
              <td>Income</td>
              <td>08-JUL-2022</td>
              <td>Income</td>
              <td>Office</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>9</td>
              <td>30</td>
              <td>Income</td>
              <td>09-JUL-2022</td>
              <td>Income</td>
              <td>Office</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>10</td>
              <td>30</td>
              <td>Expense</td>
              <td>10-JUL-2022</td>
              <td>Meeting</td>
              <td>Personal</td>
              <td>Travel</td>
            </tr>
          </tbody>
        </table>
      </div>
</main>
);
}

export default Main;