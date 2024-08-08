import './todo-filter-btns.css'

const FilterBtns = () => {

    return (
        <div className='wrapper'>
            <button className="btn_base btn_filter btn_filter_active">All</button>
            <button className="btn_base btn_filter">Active</button>
            <button className="btn_base btn_filter">Completed</button>
        </div>
    )
}

export default FilterBtns