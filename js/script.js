// Copyright (c) 2024 hames.al-sharoa All rights reserved
//
// Created by: hames.al-sharoa
// Created on: Apr 2024
// This file contains the JS functions for index.html
"use strict"

function button() {

  const lengththeAString = parseInt(document.getElementById("lengthA").value)
  const lengththeBString = parseInt(document.getElementById("lengthB").value)
  const lengththeCString = parseInt(document.getElementById("lengthC").value)

  const lengthA = parseFloat(lengththeAString)
  const lengthB = parseFloat(lengththeBString)
  const lengthC = parseFloat(lengththeCString)

  // using the cosine law
  const angleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)) * (180 / Math.PI)
  const angleB = Math.acos((lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)) * (180 / Math.PI)
  const angleC = Math.acos((lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)) * (180 / Math.PI)
  
  if (angleA == angleB && angleA == angleC) {
    document.getElementById("math").innerHTML =
    "You have an equilateral triangle!" 
  }  else if (
    (angleA != angleB && angleC) ||
    (angleA != angleB && angleC) 
  ) {
    document.getElementById("math").innerHTML =
    "You have an isosceles triangle!"
  } else {
    document.getElementById("math").innerHTML =
    "this triangle doesn't exist."
  }
}
  