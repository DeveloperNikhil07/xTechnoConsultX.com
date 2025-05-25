'use client'
import React from 'react'

export default function TopProgressBar({ progress }) {
  const getProgressColor = (progress) => {
    if (progress === 0) return '#ccc'
    if (progress <= 25) return '#ff4d4f'
    if (progress <= 50) return '#fa8c16'
    if (progress <= 75) return '#1890ff'
    return '#52c41a'
  }

  return (
    <div className="progress-container">
      <div
        className="progress-row"
        style={{
          width: `${progress}%`,
          backgroundColor: getProgressColor(progress),
        }}
      ></div>
    </div>
  )
}
