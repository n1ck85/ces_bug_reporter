import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/react';

export default function BugReport({ severities, errors = {} }) {
  const [form, setForm] = useState({ title: '', description: '', severity: '' })
  const { success, message } = usePage().props;
 
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    Inertia.post('/bug-report', form)
  }

  return (
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4 text-center">Bug Report Form</h1>
      <p class="mb-4 text-center">Please fill out the form below to report a bug.</p>
      <div class="max-w-md mx-auto">
        <form class="flex flex-col border-b border-gray-700/10 p-4 mt-6" onSubmit={handleSubmit}>
          <div class="mb-3 flex flex-col">
            <label>Title</label>
              <input class="border border-gray-900 rounded p-1" name="title" value={form.title} onChange={handleChange} />
          </div>
          <div class="mb-3 flex flex-col">
            <label>Description</label>
            <textarea class="border border-gray-900 rounded p-1" name="description" value={form.description} onChange={handleChange} />
          </div>
          <div class="mb-3 flex flex-col">
            <label>Severity</label>
            <select class="border border-gray-900 rounded p-1" name="severity" value={form.severity} onChange={handleChange}>
              <option value="" disabled>Select severity</option>
              {Object.entries(severities).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit Bug Report</button>
            {success === true && (
              <div id="success-message" style={{ color: 'green', marginTop: '1em' }}>
                <p>{message}</p>
              </div>
            )}

            {Object.keys(errors).length > 0 && (
            <div id="error-message" style={{ color: 'red', marginTop: '1em' }}>
                <ul>
                {Object.entries(errors).map(([field, message]) => (
                    <li key={field}>{message}</li>
                ))}
                </ul>
            </div>
            )}
        </form>
      </div>
    </div>
  )
}