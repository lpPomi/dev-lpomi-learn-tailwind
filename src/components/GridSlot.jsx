
import styles from '../data/tailwindStyles'

function GridSlot() {

    //console.log(styles.gridFields)
    return (
        <div className="container mx-auto">
            {/*   <div className="grid grid-cols-4 gap-6"> */}
            <div className={styles.gridResponsive}>
                <div className={styles.gridFields} >
                    <div className='bg-green-400'>
                        <h3>green</h3>
                    </div>
                    <div className='bg-orange-400'>
                        <h3>sddd</h3>
                    </div>

                    <div className='bg-red-600'>
                        <ul>
                            <li>
                                <h1>line1</h1>
                            </li>
                            <li>
                                <h1>line2</h1>
                            </li>
                            <li>
                                <h1>line3</h1>
                            </li>
                            <li>
                                <h1>line4</h1>
                            </li>
                            <li>
                                <h1>line5</h1>
                            </li>
                            <li>
                                <a className={styles.anchorClassNames} href='#'>
                                    Goto
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div>
                       <a className={styles.anchorClassNames} href='#'>
                            Goto
                        </a>
                    </div> */}
                </div>
                <div className={styles.gridFields} >
                    Grid field 2
                </div>
                <div className={styles.gridFields} >
                    Grid field 3
                </div>
                <div className={styles.gridFields} >
                    Grid field 4
                </div>
            </div>
        </div>
    )
}

export default GridSlot