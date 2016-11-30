import React, { Component } from 'react';

const Icon = ({ name, size, color }) => (
  <i className="material-icons icon" style={{ fontSize: size, color: color || "#000" }}>{name}</i>
)

export default Icon;
