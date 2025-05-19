export default function TabButton({ children, onSelected, isSelected }){

  return  <li>
            <button className={isSelected ? "active" : "inactive"} onClick={onSelected}>{children}</button>
          </li>
}