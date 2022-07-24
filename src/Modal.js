import React from 'react';

function Modal() {
  return (

<div class="modal fade" id="IncomeExpense" tabindex="-1" role="dialog" aria-labelledby="IncomeExpense" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Income/Expense</h5>
            </div>
        <div class="modal-body">

        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-income-tab" data-bs-toggle="pill" data-bs-target="#pills-income" type="button" role="tab" aria-controls="pills-income" aria-selected="true">Income</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-expense-tab" data-bs-toggle="pill" data-bs-target="#pills-expense" type="button" role="tab" aria-controls="pills-expense" aria-selected="false">Expense</button>
        </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="pills-income" role="tabpanel" aria-labelledby="pills-income-tab" tabindex="0">
        <form action="#">
                <div class="mb-3 mt-3">
                <label for="Amount" class="form-label">Amount:</label>
                <input type="number" class="form-control" id="amount" placeholder="Enter Amount" name="Amount" />
                </div>
                <div class="mb-3">
                <label for="datetime" class="form-label">Date/Time: {new Date().toLocaleString() + ""}</label>
                </div>
                <div class="mb-3 mt-3">
                <label for="Amount" class="form-label">Description:</label>
                <input type="text" class="form-control" id="Description" placeholder="Enter Description" name="Description" />
                </div>
                <br/>
                <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuModal3" data-bs-toggle="dropdown" aria-expanded="false">
                Division
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuModal3">
                <li><a class="dropdown-item" href="#">Office</a></li>
                <li><a class="dropdown-item" href="#">Personal</a></li>
                </ul>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div class="tab-pane fade" id="pills-expense" role="tabpanel" aria-labelledby="pills-expense-tab" tabindex="0">
        <form action="#">
                {/* <div class="dropdown">
                <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuModal" data-bs-toggle="dropdown" aria-expanded="false">
                Income/Expense
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuModal">
                <li><a class="dropdown-item" href="#">Income</a></li>
                <li><a class="dropdown-item" href="#">Expense</a></li>
                </ul>
                </div> */}

                <div class="mb-3 mt-3">
                <label for="Amount" class="form-label">Amount:</label>
                <input type="number" class="form-control" id="amount" placeholder="Enter Amount" name="Amount" />
                </div>
                <div class="mb-3">
                <label for="datetime" class="form-label">Date/Time: {new Date().toLocaleString() + ""}</label>
                </div>
                <div class="mb-3 mt-3">
                <label for="Amount" class="form-label">Description:</label>
                <input type="text" class="form-control" id="Description" placeholder="Enter Description" name="Description" />
                </div>

                <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuModal2" data-bs-toggle="dropdown" aria-expanded="false">
                Category
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuModal2">
                <li><a class="dropdown-item" href="#">Entertainment</a></li>
                <li><a class="dropdown-item" href="#">Fuel</a></li>
                <li><a class="dropdown-item" href="#">Supplies</a></li>
                <li><a class="dropdown-item" href="#">Stationary</a></li>
                <li><a class="dropdown-item" href="#">Parking</a></li>
                <li><a class="dropdown-item" href="#">Legal</a></li>
                </ul>
                </div>
                <br/>
                <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuModal3" data-bs-toggle="dropdown" aria-expanded="false">
                Division
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuModal3">
                <li><a class="dropdown-item" href="#">Office</a></li>
                <li><a class="dropdown-item" href="#">Personal</a></li>
                </ul>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
    </div>
</div>
);
}

export default Modal;