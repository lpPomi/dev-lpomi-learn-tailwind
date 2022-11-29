

import styles from '../data/tailwindStyles'
function Button() {

  /* later put this valiues in an external json file */
  /* const button1 = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
 
  const button1ClassNames = [
    'bg-blue-500',
    'hover:bg-blue-700',
    'text-white font-bold',
    'py-2 px-4',
    'rounded',
  ].join(' ')
 
  const button2ClassNames = [
    'text-black',
    'font-bold',
    'inline-block',
    'rounded-full',
    'bg-yellow-400',
    'py-1',
    'px-3',
  ].join(' ') */

  /*  the json object with the classNames code */
  /*  const styles = {
     button1: [
       'bg-blue-500',
       'hover:bg-blue-700',
       'text-white font-bold',
       'py-2 px-4',
       'rounded',
     ].join(' '),
 
     button2: [
       'text-black',
       'font-bold',
       'inline-block',
       'rounded-full',
       'bg-yellow-400',
       'py-1',
       'px-3',
     ].join(' ')
   } */

  return (
    <div>
      <button className={styles.button1}>
        Button
      </button>
      <br /><br />
      <button className={styles.button2}>
        Button
      </button>
    </div>
  )
}

export default Button