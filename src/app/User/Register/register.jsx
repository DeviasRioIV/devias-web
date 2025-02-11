'use client'
import styles from "./page.module.css"

export default function Home() {

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
      full_name: formData.get("name"),
    }

    const response = await fetch('/api/auth/signup', {
      method: 'POST', // Explicitly specify POST method
      body: JSON.stringify(body), // Send data as JSON
      headers: { 'Content-Type': 'application/json' } // Set content type
    })

    console.log(response)
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <input type="password" name="password"/>
        <button>Submiteá</button>
      </form>
    </main>
  );
}