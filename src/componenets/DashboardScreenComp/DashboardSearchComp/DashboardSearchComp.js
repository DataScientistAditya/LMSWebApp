import React from "react";



const SearchCompDashboard=()=>{
    return(
        <div class="col-md-6 col-sm-6 mob-hide">
            <form class="app-search">
                <input type="text" placeholder="Search..." class="form-control" />
                <a href="#"><i class="fa fa-search"></i></a>
            </form>
        </div>
    )
}

export default SearchCompDashboard;