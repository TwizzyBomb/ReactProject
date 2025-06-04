export default function TabButton({ children, isSelected, ...props }){

  return  <li>
            <button className={isSelected ? "active" : "inactive"} {...props}>{children}</button>
          </li>
}