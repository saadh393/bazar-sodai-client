/*  
💥 Title : Searchbar
📃 Description : Search bar
✍ Author : Saad Hasan
⌚ Date : 01/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */

const Searchbar = () => {
  return (
    <>
      <div class="input-group mb-3 inputWidth mx-auto">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <span class="input-group-text bg-primary text-white" id="basic-addon2">
            Search
          </span>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
