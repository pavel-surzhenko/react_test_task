/* eslint-disable jsx-a11y/anchor-is-valid */
export const Pagination: React.FC = () => {
    return (
        <div className="pagination">
            <div className="pagination-container">
                <i className="material-icons icon-number">chevron_left</i>
                <div className="pagination-number">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">...</a>
                    <a href="#">18</a>
                </div>
                <i className="material-icons icon-number">chevron_right</i>
            </div>
        </div>
    )
}
