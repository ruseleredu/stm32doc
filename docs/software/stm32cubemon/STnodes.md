---
id: stm32cubemonstnodes
title: ST Nodes
description: Monitoring tool to test STM32 applications at run-time.
slug: /stm32cubemonstnodes
---

## List of specific ST nodes

- [List of specific ST nodes](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:List_of_specific_ST_nodes)

## Design nodes
These nodes are used to create flows from target to variable, rendered in dashboard view. Design nodes are not visible on the dashboard. 

### Acquisition out
This allows the user to define and/or select a probe configuration (probe name, protocol and frequency). This node opens and closes the connection, and send commands to the selected probe.

- [STM32CubeMonitor:How to select the target](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:How_to_select_the_target) 

### Acquisition in
This allows user to define and/or select a probe configuration (probe name, protocol and frequency). This node receives data from the selected probe.

The acquisition in node is typically designed to be back-linked with one, or several, processing nodes.

- [STM32CubeMonitor:How to select the target](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:How_to_select_the_target)  
### Variables

This allows a variables group to be configured to hold a set of variables and few additional parameters that are useful for communication with the target.

- [How to add a variable to monitor](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:How_to_add_a_variable_to_monitor)
- [How to extract address from ELF files](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:How_to_extract_address_from_ELF_files)
- [How to modify frequency of acquisition](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:How_to_modify_frequency_of_acquisition)

### Processing

This transforms each input message representing one measurement of a group of variables into one message every 50 ms per variable. The message contains one, or several, duplets (x and y). It is also possible to define expressions and statistics based on the individual measurements and log options. This node allows filtering of probe data, per variables group.

- [How to record and replay data](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:How_to_record_and_replay_data)
- [How to perform additional calculations on measurements](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:How_to_perform_additional_calculations_on_measurements)

## Dashboard nodes

These nodes are visible in dashboard mode; they allow the user to visualize or modify variables used on the target. 

### Chart
This node allows input values to be plotted on a chart. This can be a line chart or a bar chart.

- [STM32CubeMonitor:How to configure the chart](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:How_to_configure_the_chart)  

#### Write panel

This adds a "write" widget to the dashboard. 

- [STM32CubeMonitor:How to write variables](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:How_to_write_variables)
- [Basic flow to perform a simple acquisition](https://wiki.st.com/stm32mcu/wiki/STM32CubeMonitor:Basic_flow_to_perform_a_simple_acquisition)