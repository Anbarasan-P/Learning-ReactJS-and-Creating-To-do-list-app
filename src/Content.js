import React from 'react'

const Content = () => {

    function handleNameChange(){
        const names = ['earn', 'grow','give']
        const int = Math.floor(Math.random(names)*3)
        return names[int]
    }

  return (
    <main>
      <p>Lets {handleNameChange() } Money</p>
    </main>
  )
}

export default Content
