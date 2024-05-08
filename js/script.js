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

  / using the cosine law
  const andleA = Math.acos((lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 *))