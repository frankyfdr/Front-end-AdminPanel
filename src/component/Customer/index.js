import "./style.css"
const Main = () => {
    return (
        <div className="geral-main-container">
        <h1>Customer</h1>
        <div className="top-panel">
            <div className="top-panel-content">
            <input placeholder="Search.." className="inSearch" type="text"/>
            <select className="dropmenu">
            <option value="0">Status</option>
            <option value="0">Status 1</option>
            <option value="0">Status 2</option>
            </select>
            <div className="addbtn">Button</div>
            </div>
        </div>
        <div className="geral-container-header">
            <div className="cell"><label>Order</label></div>
            <div className="cell"><label>Date</label></div>
            <div className="cell"><label>Status</label></div>
            <div className="cell"><label>Customer</label></div>
            <div className="cell"><label>Purchased</label></div>
            <div className="cell"><label>Total</label></div>
            <div className="cell"><div className="opt">...</div></div>
            <div className="cell-header-panel" ></div>
        </div>
        </div>
    )
}
export default Main;