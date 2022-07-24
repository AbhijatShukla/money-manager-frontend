import React from 'react';
import { FilePlus } from 'react-feather';
import { FileMinus } from 'react-feather';
import { Home } from 'react-feather';
import { Plus } from 'react-feather';

function Sidebar() {
  return (

<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <span class="align-text-bottom"><Home color='black' size="15"/> </span>
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" data-toggle="modal" data-target="#IncomeExpense" data-bs-toggle="modal" data-bs-target="#IncomeExpense">
              <span class="align-text-bottom"><Plus color='black' size="15"/> </span>
              Add New
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="align-text-bottom"><FilePlus color='black' size="15"/> </span>
              Income Report
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="align-text-bottom"><FileMinus color='black' size="15"/> </span>
              Expense Report
            </a>
          </li>
        </ul>
      </div>
    </nav>
      );
    }
    
    export default Sidebar;