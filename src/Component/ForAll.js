import React from 'react';

const Alls = ({a,b,c}) =>{
    return(
        <div className="ForAll">
            <div className="CheckAll">

                <input type="checkbox" id="myCheckbox" 
                onClick={a}/>
                <label for="myCheckbox"> Choose All</label>

                <input type="checkbox" id="myCompletebox"
                onClick={b}/>
                <label for="myCheckbox"> Done </label>

                <input type="checkbox" id="myIncompletebox"
                onClick={c}/>
                <label for="myCheckbox"> Undone</label>
            </div>

            <div className="Filter">

            </div>
        </div>
    );
}

export default Alls;