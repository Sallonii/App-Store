// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickingTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const clickTabItem = () => {
    onClickingTab(tabId)
  }

  const isTabActive = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tabs-list">
      <button
        type="button"
        className={`tab-item ${isTabActive}`}
        onClick={clickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
