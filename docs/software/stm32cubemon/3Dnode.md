---
id: node-red-contrib-stm32cubemonitor-3Dnode
title: 3Dnode
description: A Node-RED dashboard node to display the picture of a board, 3D oriented according to given coordinates.
slug: /node-red-contrib-stm32cubemonitor-3Dnode
---


```bash
<script type="text/html" data-help-name="ui_3D">
``` 

A Node-RED dashboard node to display the picture of a board, 3D oriented according to given coordinates.

The orientation is given by the input message. The picture is embedded in the widget and can not be changed

### Properties

GroupDashboard group

Allows to define the dashboard group in which the 3D board will be rendered.

Size(width x height) or auto

Allows to specify the widget size in:

*   `Fixed mode` In that case, you specify the width and height of the widget with fixed numbers of units.
*   `Auto mode` In this case, the widget will fill the width of the dashboard group.

NameString

The name of the widget in the editor.

### Input

payloadobject

payload is an object representing the orientation. The payload object holds the 3 axis rotations:

*   `x :` Rotation along X axis. The X axis is the horizontal axis on the screen (vertical screen)
*   `y :` Rotation along y axis. The Y axis is the vertical axis on the screen
*   `z :` Rotation along z axis. The Z axis is perpendicular to the screen plane

The following example shows an input `msg` for the 3D node:
```bash
        "payload": {
            "x": 80,
            "y": 48,
            "z": 35            
        }
```