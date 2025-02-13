import { useState, useEffect} from 'react'
import './App.css'

function Story() {
  const [emoji, setEmoji] = useState('Clique no botão')
  const emojis = ['👾', '🐵', '🧟', '🧑‍🎄', '🎮', '🗿', '❄️']

  const [icon, setIcon] = useState()
  const svgs = [
    <svg height="200" width="200" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
	<path d="M292.8 41.71c16.1 58.89 125.3 78.19 197.9 116.19c1.6 35.2-14.4 72.6-56.7 102.3c2.9 70.2-41.8 110.2-114.3 132.4c-.3 33.2-12.7 64-47.3 90.3l-59-36.4l47.4-34.2c-1.8-25.6-9.6-52.3-55-67.3l-26.3-93.2c-54.5-10.4-51.9-31.3-56.3-50.9l-64.93 20.4c-49.154-31-51.902-75.4 6.26-83.4l6.99-72.78l51.18 9.12L133 37.03l49.6-7.9l20.7 37.33z" fill="currentColor"/>
</svg>,
<svg height="200" width="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
	<path d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5zM293 293l-48-42q-11 0-26 2.5t-27 2.5q-1-1-18-37Q64 346 64 512q0 3 .5 8t.5 7q6 6 29.5 22.5T128 576h64q3-2 5.5-3t5.5-2q-10-11-29.5-32.5T144 507q4-23 11-69.5t10-69.5q86-36 128-53v-22zm201-163q-14-6-26-11q-3-8-4-12q-6 19-19 57q4 1 11.5 2t11.5 2h26v-38zm-4 471q-5 5-7 8q-12 21-34 64t-33 64q14 21 42.5 64t42.5 64q130 8 197 12q2 25 16 34q91-46 154-127.5T951 601q-19-4-41.5-11t-32.5-9.5t-39.5-5T776 579q-12 1-15.5-15.5t-3.5-34t-4-18.5q-22-4-89 7.5t-89 7.5q-13 12-85 75zm59-501q-3 20-10.5 60T527 221q5-1 16.5-2.5T560 217q-3-2-7-4q15-5 22-8q-17-70-26-105zm116-9q-2 11-2 31t-10 53q1 2 4 4q20-2 67-7q0-21 21-42q-38-23-80-39zm125 70q-2 4-7 11q19 3 25 5q-12-11-18-16zm27 24q-3 6-9.5 18t-9.5 18q-29 1-78 3l-4-34q-2 1-7 2.5t-8 1.5v49q-21 2-64.5 6t-64.5 6q-7 10-15 22q27 58 41 87q-20 5-82 22v34q0 2 1.5 6t2.5 6q17 8 53 24t54 25l22-27q-1-10-5-31.5t-6-32.5q3-2 9.5-5.5t9.5-5.5q27-8 41-11q13 21 36.5 60t29.5 49q9-8 25-24.5t24-24.5q-54-38-71-49q1-8 4-23h37q56 48 115 98q1 0 2-1.5t2-1.5q-4-8-26-49q0-1 3-4l4-4h41q1-1 17-9q-34-116-124-200z" fill="currentColor"/>
</svg>,
<svg height="200" width="200" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
	<path d="M5.344 5.262L2.746 2.664c-.454-.453-.943.032-1.525-.551C.639 1.531 1.294.745 1.7.34c.406-.405 1.025-.444 1.383-.087l3.275 3.276c.357.358-.657 2.092-1.014 1.733zm11.594 10.363c-1.212 1.212-6.35-3.236-11.623-8.51l2.318-2.311c0 .001 9.885 10.24 9.305 10.821z" fill="currentColor" fillRule="evenodd"/>
</svg>,
<svg height="200" width="200" viewBox="0 0 960 1024" xmlns="http://www.w3.org/2000/svg">
	<path d="M768 806v122q0 40-28 68t-68 28t-68-28t-28-68q0 40-28 68t-68 28t-68-28t-28-68q0 40-28 68t-68 28t-68-28t-28-68V806q-89-63-140.5-156.5T0 448q0-91 38-174t102.5-143t153-95.5T480 0t186.5 35.5t153 95.5T922 274t38 174q0 108-51.5 202T768 806zM288 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28zm96 384h192l-96-128zm288-384q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28z" fill="currentColor"/>
</svg>,
<svg height="200" width="200" viewBox="0 0 100 99" xmlns="http://www.w3.org/2000/svg">
	<path d="M2 32h96v51H2z" fill="#C0392C"/>
	<path d="M75 85.999h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4c0-1.103.896-2 2-2z" fill="#2C3E50"/>
	<path d="M93 89v7.999A2 2 0 0 1 91 99H79a2 2 0 0 1-2-2.001V89c.02-.004 15.994.021 16 0z" fill="#23475F"/>
	<path d="M79.917 99h2V89h-2v10zm4.166 0h1.834V89h-1.834v10zm4-10v10h1.834V89h-1.834z" fill="#1D3D51"/>
	<path d="M21 85.999h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4c0-1.103.896-2 2-2z" fill="#2C3E50"/>
	<path d="M23 89v7.999A2 2 0 0 1 21 99H9a2 2 0 0 1-2-2.001V89c.019-.004 15.995.021 16 0z" fill="#23475F"/>
	<path d="M9.917 99h2V89h-2v10zm4.166 0h1.833V89h-1.833v10zm4-10v10h1.833V89h-1.833z" fill="#1D3D51"/>
	<path d="M88 0H12C6.477 0 2 4.478 2 10v22s21.903 7.903 33.854 19.855C47.902 63.902 50 75.999 50 75.999s2.055-12.054 14.081-24.08C76.055 39.946 98 32 98 32V10c0-5.523-4.479-10-10-10z" fill="#EBEEEF"/>
	<path d="M58 29c-2.205 0-4-1.794-4-4V14c0-2.206 1.795-4 4-4h26c2.206 0 4 1.794 4 4v11c0 2.206-1.794 4-4 4H58z" fill="#fff"/>
	<path d="M58 29h4l19-19H58c-2.205 0-4 1.794-4 4v11c0 2.205 1.795 4 4 4z" fill="#EBEEEF"/>
	<path d="M87 11H55v5h17v12h7V16h8z" fill="#E5E5E5"/>
	<path d="M16 29c-2.206 0-4-1.794-4-4V14c0-2.206 1.794-4 4-4h26c2.205 0 4 1.794 4 4v11c0 2.206-1.795 4-4 4H16z" fill="#fff"/>
	<path d="M45 11H13v5h8v12h7V16h17z" fill="#E5E5E5"/>
	<path d="M2 83h96a2 2 0 0 1 2 1.999v2A2 2 0 0 1 98 89H2a2 2 0 0 1-2-2.001v-2A2 2 0 0 1 2 83z" fill="#D4D7DA"/>
	<path d="M79 56c4.971 0 9 4.029 9 9s-4.029 9-9 9s-9-4.029-9-9s4.029-9 9-9z" fill="#fff"/>
	<path d="M79 59c3.312 0 6 2.688 6 6s-2.688 6-6 6s-6-2.688-6-6s2.688-6 6-6z" fill="#F39C12"/>
	<path d="M21 56c4.971 0 9 4.029 9 9s-4.029 9-9 9s-9-4.029-9-9s4.029-9 9-9z" fill="#fff"/>
	<path d="M21 59c3.313 0 6 2.688 6 6s-2.687 6-6 6s-6-2.688-6-6s2.687-6 6-6z" fill="#F39C12"/>
	<path d="M52.986 37.986C50.824 35.824 47 37 47 37L33.942 50.057c.658.59 1.301 1.188 1.912 1.799c3.479 3.479 6.125 6.961 8.134 10.155L58 48s.713-3.287-.98-4.981c-1.243-1.242-2.702-3.701-4.034-5.033z" fill="#C8CBCB"/>
	<path d="M50 36c-4.971 0-9 4.029-9 9s4.029 8.999 9 8.999s9-4.028 9-8.999s-4.029-9-9-9zm0 3c1.551 0 2.961.594 4.025 1.561L50 44.586l-4.025-4.026A5.964 5.964 0 0 1 50 39zm0 12a6 6 0 0 1-5.275-8.861L50 47.414l5.275-5.275A6.002 6.002 0 0 1 50 51z" fill="#fff"/>
	<path d="m72 19l8-8H55.383a3.946 3.946 0 0 0-.383.382V16h17v3z" fill="#D3D6D7"/>
	<path d="M84 11c1.654 0 3 1.346 3 3v11c0 1.654-1.346 3-3 3H58c-1.654 0-3-1.346-3-3V14c0-1.654 1.346-3 3-3h26m0-2H58a5 5 0 0 0-5 5v11a5 5 0 0 0 5 5h26a5 5 0 0 0 5-5V14a5 5 0 0 0-5-5z" fill="#BDC3C7"/>
	<path d="M16 29h4l19-19H16c-2.206 0-4 1.794-4 4v11c0 2.205 1.794 4 4 4z" fill="#EBEEEF"/>
	<path d="M28 21v-5h5l5-5H13.382a4.05 4.05 0 0 0-.382.382V16h8v12l7-7z" fill="#D3D6D7"/>
	<path d="M42 11c1.654 0 3 1.346 3 3v11c0 1.654-1.346 3-3 3H16c-1.654 0-3-1.346-3-3V14c0-1.654 1.346-3 3-3h26m0-2H16a5 5 0 0 0-5 5v11a5 5 0 0 0 5 5h26a5 5 0 0 0 5-5V14a5 5 0 0 0-5-5z" fill="#BDC3C7"/>
</svg>,
<svg height="200" width="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
		<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/>
		<path d="M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20"/>
		<path d="M12 12a8 8 0 0 0-7.464 4.928m8.415-9.575a12 12 0 0 0-9.88 4.111"/>
		<path d="M12 12a8 8 0 0 0-.536-8.928m4.085 12.075a12 12 0 0 0 1.38-10.611"/>
	</g>
</svg>,
<svg height="200" width="200" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
	<path d="M12.3 6.5c.5-.5.9-.8 1.2-1.1c1.6-1.6 3.2-4.1 2.2-5.1s-3.4.6-5 2.2c-.3.3-.6.7-1.1 1.2L2.6.5C1.9.2 1.1.3.6.8l-.6.5L6.6 7c-1.3 1.6-2.7 3.1-3.4 4l-1.1-.6c-.5-.3-1.2-.3-1.6.2l-.3.3L3 13l2 2.8l.3-.3c.4-.4.5-1.1.2-1.6L5 12.8c.9-.7 2.4-2.1 4-3.4l5.7 6.6l.5-.5c.5-.5.6-1.3.3-2l-3.2-7z" fill="currentColor"/>
</svg>
  ]

  const [contadorClique, setContadorClique] = useState(0);

  

  

  
  function sortear() {
    
    let n = Math.floor(Math.random() * emojis.length)
    setEmoji(emojis[n])
    
  }

  function sortearIcon(){

    let m = Math.floor(Math.random() * svgs.length)
    setIcon(svgs[m])
    setContadorClique(prevCount => prevCount + 1);
  
  }
  
  

  return (
    <>
      <h1>StoryIcons</h1>
      <button onClick={sortearIcon}>Clique</button>
      <p>Icones Gerados: {contadorClique}</p>
      <h2>{icon}</h2>{/* Mostra o ícone sorteado */}
      


      
      <h1>Gerador de Emojis Aleatórios</h1>
      <button onClick={sortear}>Clique aqui</button>
      <h2>{emoji}</h2> {/* Exibe o emoji sorteado */}
    </>
  )
}


export default Story

