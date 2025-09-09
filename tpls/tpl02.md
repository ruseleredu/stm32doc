---
sidebar_position: 4
title: Template 02
description: Template 02
slug: /tpl02
---

import LabTable from '@site/src/components/LabTable';

## Template
- https://github.com/ELT73A-LAB-TPL/LAB02

## Internal links only
<LabTable internal={true} />

## External links only
<LabTable internal={false} />

## Show only one lab (index), internal
<LabTable index={2} internal={true} />

## Show only one lab (index), external
<LabTable index={2} internal={false} />