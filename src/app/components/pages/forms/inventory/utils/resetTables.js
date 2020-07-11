import styles from '../places/tables/table.module.css'

const resetTables = () => {
  const elemsDivision = document.querySelectorAll('#division_table tr')
  const elemsPlacement = document.querySelectorAll('#placement_table tbody tr')

  elemsDivision.forEach(elem => {
    elem.classList.remove(styles.row_selected)
  })

  elemsPlacement.forEach(elem => {
    elem.classList.remove(styles.row_selected)
  })
}

export default resetTables