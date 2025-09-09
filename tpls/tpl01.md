---
sidebar_position: 3
title: Template 01
description: Template 01
slug: /tpl01
---

import LabTable from '@site/src/components/LabTable';

## Template
- https://github.com/ELT73A-LAB-TPL/LAB01

## Internal links only
<LabTable internal={true} />

## External links only
<LabTable internal={false} />

## Show only one lab (index 1), internal
<LabTable index={1} internal={true} />

## Show only one lab (index 0), external
<LabTable index={1} internal={false} />