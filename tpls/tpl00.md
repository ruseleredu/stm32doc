---
sidebar_position: 2
title: Template 00
description: Template 00
slug: /tpl00
---

import LabTable from '@site/src/components/LabTable';

## Template
- https://github.com/ELT73A-LAB-TPL/LAB00


## Internal links only
<LabTable internal={true} />

## External links only
<LabTable internal={false} />

## Show only one lab (index 0), internal
<LabTable index={0} internal={true} />

## Show only one lab (index 0), external
<LabTable index={0} internal={false} />