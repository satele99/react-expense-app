import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { filterParam } from "../features/filterInfoSlice";
import { getCategories } from "../features/categorySlice"
import { showSettingModal } from "../features/signInSlice";

export default function CategoryForm() {
    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const setFilterParam = (event) => {
        const filter = event.target.value;
        dispatch(filterParam(filter))
    }
    const openSettingModal = (e) => {
        e.preventDefault()
        dispatch(showSettingModal())
    }
    return (
        <form class="form-inline my-2 my-lg-0 add-category">
            <select class="form-select" placeholder="Filter by Category" onChange={setFilterParam}>
                <option value={'Show All'}>Show All</option>
            {
                categories.map((item)=> (
                    <option value={item.categoryName}>{item.categoryName}</option>
                ))
            }
            </select>
            <button class="btn btn-light my-2 my-sm-0" onClick={openSettingModal}>+ Add a New Expense</button>
        </form>
    )
}